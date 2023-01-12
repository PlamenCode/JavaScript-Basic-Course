function heroes(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 1; i <= n; i++) {
        let [heroName, Hp, Mp] = input.shift().split(' ');

        heroes[heroName] = {
            Hp: Number(Hp),
            Mp: Number(Mp)
        }
    }
    let command = input.shift();

    while (command != 'End') {
        let line = command.split(' - ');
        let action = line.shift();

        switch (action) {
            case 'CastSpell': {
                let [heroName, MpNeeded, spellName] = line;

                if (heroes[heroName].Mp >= MpNeeded) {
                    heroes[heroName].Mp = heroes[heroName].Mp - MpNeeded;
                    let manaPointsLeft = heroes[heroName].Mp;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${manaPointsLeft} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            }

            case 'TakeDamage': {
                let [heroName, damage, attacker] = line;
                heroes[heroName].Hp = heroes[heroName].Hp - damage;
                let currentHp = heroes[heroName].Hp;
                if (currentHp > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHp} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroes[heroName];
                }
                break;
            }

            case 'Recharge': {
                let [heroName, amount] = line;
                amount = Number(amount);
                heroes[heroName].Mp += amount;
                let cuurentMp = heroes[heroName].Mp;
                if (cuurentMp <= 200) {
                    console.log(`${heroName} recharged for ${amount} MP!`);
                } else{
                    heroes[heroName].Mp = 200;
                    let amountOver = cuurentMp - 200;
                    let amountHealed = amount - amountOver;
                    console.log(`${heroName} recharged for ${amountHealed} MP!`);
                }
                break;
            }

            case 'Heal':{
                let [heroName, amount] = line;
                amount = Number(amount);
                heroes[heroName].Hp += amount;
                let currentHp =  heroes[heroName].Hp;
                if(currentHp <= 100){
                    console.log(`${heroName} healed for ${amount} HP!`);
                } else{
                    heroes[heroName].Hp = 100;
                    let amountOver = currentHp - 100;
                    let amountHealed = amount - amountOver;
                    console.log(`${heroName} healed for ${amountHealed} HP!`);

                }
                break;
            }
        }
        command = input.shift();
    }
    let heroesResult = Object.entries(heroes);
    for (let hero of heroesResult) {
        let heroName = hero[0];
        let heroHp = hero[1].Hp;
        let heroMp = hero[1].Mp;
        console.log(`${heroName}\n  HP: ${heroHp}\n  MP: ${heroMp}`); 
    }

}
heroes(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])