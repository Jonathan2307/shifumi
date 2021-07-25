function shifumi() {
    const user_choice = ['rock', 'paper', 'scissors'];
    const choice = prompt(`Choose one of the following: ${user_choice.join(', ')}.`);

    if (!user_choice.includes(choice)) {
        alert(`Attention, ${choice} is not one of the ${user_choice.length} choices`);
        return shifumi()
    }

    alert(`Congratulations, you chose ${choice}`);

    //AI choice
//    fetch('http://www.randomnumberapi.com/api/v1.0/randomnumber?min=0&max=2&count=1')
//      .then(res => res.text())
//      .then(res => console.log(text()))
//      .catch(err => console.log(`erreur : ${err}`));

    const ia = Math.floor(Math.random() * user_choice.length)
    const ia_choice = user_choice[ia]
    alert(`AI chose ${ia_choice}, let's play !`);

    //who wins
    if (ia_choice.includes(choice)) {
        alert(`there is an equality here !`)
        shifumi();
    } else if ((ia_choice == user_choice[0] && choice == user_choice[1]) || (ia_choice == user_choice[1] && choice == user_choice[2]) || (ia_choice == user_choice[2] && choice == user_choice[0])) {
        alert(`You win ! ${choice} beat ${ia_choice} `)
    }
    else {
        alert(`You loose...${ia_choice} beat ${choice}.`)
    }
}

shifumi();