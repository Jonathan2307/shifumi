function shifumi() {
    const user_choice = ['rock', 'paper', 'scissors']
    let choice = prompt(`Choose one of the following : ${user_choice.join(', ')}.`)
    if (!user_choice.includes(choice)) {
        alert(`you did not choose one of the ${user_choice.length} choices`);
        choice = prompt(`Choose one of the following : ${user_choice.join(', ')}, last chance!`)
        if(user_choice.includes(choice)) {
            alert(`Congratulations, you chose ${choice}`);
        } else {
            alert(`${choice} isn't one of the three choices, game is aborted.`)
        }
        return choice;
    }}
    shifumi();