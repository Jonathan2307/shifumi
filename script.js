function shifumi() {
    const user_choice = ['rock', 'paper', 'scissors'];
    const choice = prompt(`Choose one of the following: ${user_choice.join(', ')}.`);

    if (!user_choice.includes(choice)) {
        alert(`Attention, ${choice} is not one of the ${user_choice.length} choices`);
        return shifumi()
    }

    alert(`Congratulations, you chose ${choice}`);

    //AI choice
    const ia = Math.floor(Math.random() * user_choice.length)
    const ia_choice = user_choice[ia]
    alert(`AI chose ${ia_choice}, let's play !`);

}

shifumi();