const DealDamage = (dmg_const, attacker, defender) => {
	// A.ATK*(C/(B.DEF+C))
	let dmg = Math.round(attacker.atk*(dmg_const/(defender.def + dmg_const)));
	// defender.hp -= dmg;
	return dmg;
}

export default DealDamage;