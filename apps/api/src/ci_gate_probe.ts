// TEST ARTIFACT — deliberate type error, used to prove the #765 CI gate blocks a
// commit whose CI run went red. Delete once the gate is validated.
export const ci_gate_probe: number = 'this is not a number';
