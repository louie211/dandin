import { abs, angle_lerp_degrees, DEG_TO_RAD, max, min, vec3_distance } from "../math";
import { cylinder, material } from "../geometry/geometry";
import { allModels, currentEditModel, meshAdd } from "./scene";
import {
  levers,
  souls,
  onPlayerPullLever,
  onSoulCollected,
  lerpDamp,
  gameTimeDelta,
  gameTime,
  type Lever,
  type Soul,
} from "./world-state";
import { player_position_final } from "./player-position";
import { keyboard_downKeys, KEY_INTERACT } from "../page";

const LEVER_SENSITIVITY_RADIUS = 2.9;
const SOUL_SENSITIVITY_RADIUS = 1.5;

export const GQuad = /* @__PURE__ */ [
  { x: -1, z: 1 },
  { x: 1, z: 1 },
  { x: 1, z: -1 },
  { x: -1, z: -1 },
];

export const MODEL_ID_FIRST_BOAT = 2;

export type Circle = [number, number, number];

export const newLever = (transform: DOMMatrixReadOnly): void => {
  const $parent = currentEditModel;
  const index = levers.length;
  const lever: Lever = {
    $value: 0,
    $lerpValue: 0,
    $lerpValue2: 0,
    $parent,
    _update: () => {
      const { $value, $lerpValue, $lerpValue2 } = lever;
      const locMatrix = $parent.$matrix.multiply(transform);
      lever.$locMatrix = locMatrix;

      if (
        vec3_distance(locMatrix.transformPoint(), player_position_final) < LEVER_SENSITIVITY_RADIUS &&
        keyboard_downKeys[KEY_INTERACT]
      ) {
        if ($lerpValue < 0.3 || $lerpValue > 0.7) {
          lever.$value = $value ? 0 : 1;
          onPlayerPullLever(index);
        }
      }

      lever.$lerpValue = lerpDamp($lerpValue, $value, 4);
      lever.$lerpValue2 = lerpDamp($lerpValue2, $value, 1);
      lever.$matrix = locMatrix.rotate(lever.$lerpValue * 60 - 30, 0).translateSelf(0, 1);
    },
  };
  levers.push(lever);

  meshAdd(cylinder(5), transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(GQuad), transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};

export const newSoul = (transform: DOMMatrixReadOnly, ...walkingPath: number[][]) => {
  const parentModel = currentEditModel;
  const index = souls.length;
  const circles = (walkingPath as Circle[]).map(([x, z, w]) => ({ x, z, w }));
  let circle = circles[0]!;
  let { x: targetX, z: targetZ } = circle;
  let soulX = targetX;
  let soulZ = targetZ;
  let dirX = -1;
  let dirZ = 0;
  let randAngle = 0;
  let lookAngle = 0;
  let prevX = 0;
  let prevZ = 0;
  let velocity = 3;
  let wasInside: boolean | undefined | 1 = 1;

  const soul: Soul = {
    $value: 0,
    _update: () => {
      if (!soul.$value) {
        let isInside: boolean | undefined;
        let contextualVelocity = 1;
        let mindist = Infinity;

        for (const c of circles) {
          const { x, z, w } = c;
          const distance = Math.hypot(targetX - x, targetZ - z);
          const circleSDF = distance - w;
          isInside ||= distance < w;
          if (circleSDF > 0 && circleSDF < mindist) {
            mindist = circleSDF;
            circle = c;
          }
          contextualVelocity = min(contextualVelocity, distance / w);
        }

        if (!isInside) {
          const { x, z, w } = circle;
          const ax = targetX - x;
          const az = targetZ - z;
          let magnitude = Math.hypot(ax, az);
          let angle = Math.atan2(-az, ax);
          if (wasInside) {
            randAngle = ((Math.random() - 0.5) * Math.PI) / 2;
            velocity = max(1, velocity / (1 + Math.random()));
          }
          angle += randAngle;
          dirX = -Math.cos(angle);
          dirZ = Math.sin(angle);
          if (magnitude > 0.1) {
            // limit the vector length to the circle radius, as a security measure
            magnitude = min(magnitude, w) / (magnitude || 1);
            targetX = ax * magnitude + x;
            targetZ = az * magnitude + z;
          }
        }

        wasInside = isInside;

        velocity = lerpDamp(velocity, 3 + (1 - contextualVelocity) * 6, 3 + contextualVelocity);
        soulX = lerpDamp(soulX, (targetX = lerpDamp(targetX, targetX + dirX, velocity)), velocity);
        soulZ = lerpDamp(soulZ, (targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity)), velocity);

        lookAngle = angle_lerp_degrees(
          lookAngle,
          Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180,
          3 * gameTimeDelta,
        );

        prevX = soulX;
        prevZ = soulZ;

        const soulPos = (soul.$matrix = transform.multiply(
          parentModel.$matrix
            .translate(soulX, 0, soulZ)
            .rotateSelf(0, lookAngle)
            .skewXSelf(Math.sin(gameTime * 2) * 7)
            .skewYSelf(Math.sin(gameTime * 1.4) * 7),
        )).transformPoint();

        if (vec3_distance(soulPos, player_position_final) < SOUL_SENSITIVITY_RADIUS) {
          soul.$value = 1;
          onSoulCollected();
        }
      }

      if (soul.$value) {
        soul.$matrix = allModels[MODEL_ID_FIRST_BOAT]!.$matrix.translate(
          (index % 4) * 1.2 - 1.7 + Math.sin(gameTime + index) / 7,
          -2,
          -5.5 + ((index / 4) | 0) * 1.7 + abs((index % 4) - 2) + Math.cos(gameTime / 1.5 + index) / 6,
        );
      }
    },
  };

  if (DEBUG_FLAG0) {
    for (const c of circles) {
      meshAdd(cylinder(12), transform.translate(c.x, -1.7, c.z).scale(c.w, 0.01, c.w), material(0.3, 0.3, 0.38));
    }
  }

  souls.push(soul);
};
