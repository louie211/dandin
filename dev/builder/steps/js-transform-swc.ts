import { devLog, numberFixedRound, numberFixedString } from "@balsamic/dev";
import type { BlockStatement, ModuleItem, NumericLiteral, Program, Statement, VariableDeclaration } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../out-paths";
import { sizeDifference } from "../lib/logging";
import { getSwcMinifyOptions } from "./js-minify-swc";

export interface SwcTransformSettings {
  minify: boolean;
  constToLet: boolean;
  splitVars: boolean;

  /** Number of digits to round floating point numbers. If 0, means no rounding at all. */
  floatRound: number;
}

class Transformer extends SwcVisitor {
  public constructor(public settings: SwcTransformSettings) {
    super();
  }

  override visitNumericLiteral(n: NumericLiteral): NumericLiteral {
    const precision = this.settings.floatRound;
    if (precision > 0) {
      if (n.value.toString().includes(".")) {
        const v = numberFixedRound(n.value, precision);
        if (n.value !== v) {
          n = { ...n, value: v, raw: numberFixedString(v, precision) };
        }
      }
    }
    return super.visitNumericLiteral(n);
  }

  override visitVariableDeclaration(n: VariableDeclaration): VariableDeclaration {
    if (this.settings.constToLet && n.kind === "const") {
      n.kind = "let";
    }
    return super.visitVariableDeclaration(n);
  }

  override visitProgram(n: Program): Program {
    n = super.visitProgram(n);
    return { ...n, body: this._splitVariableDeclarations(n.body) };
  }

  override visitBlockStatement(block: BlockStatement): BlockStatement {
    block = super.visitBlockStatement(block);
    return { ...block, stmts: this._splitVariableDeclarations(block.stmts) };
  }

  private _splitVariableDeclarations(stmts: Statement[] | ModuleItem[]): any[] {
    if (!this.settings.splitVars) {
      return stmts;
    }

    const resultStatements = [];
    for (const statement of stmts) {
      if (statement.type === "VariableDeclaration") {
        // Split variable declarations
        for (const declaration of statement.declarations) {
          resultStatements.push({ ...statement, declarations: [declaration] });
        }
      } else {
        resultStatements.push(statement);
      }
    }
    return resultStatements;
  }
}

export async function jsTransformSwc(source: string, settings: SwcTransformSettings): Promise<string> {
  return devLog.timed(
    async function js_swc_transform() {
      const result =
        (
          await swcTransform(source, {
            cwd: outPath_build,
            inputSourceMap: false,
            sourceMaps: false,
            configFile: false,
            filename: "index.js",
            isModule: true,
            minify: settings.minify,
            swcrc: false,
            jsc: {
              keepClassNames: false,
              target: "es2022",
              minify: settings.minify ? getSwcMinifyOptions({ mangle: false, final: false }) : undefined,
            },
            plugin: (m) => new Transformer(settings).visitProgram(m),
          })
        ).code || source;

      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
