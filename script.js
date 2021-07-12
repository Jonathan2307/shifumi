function shifumi() {
    const user_choice = ['rock', 'paper', 'scissors']
    let choice = prompt(`Choose one of the following : ${user_choice.join(', ')}.`)
    if (!user_choice.includes(choice)) {
        alert(`Attention, ${choice} is not one of the ${user_choice.length} choices`);
        return shifumi()
        if (user_choice.includes(choice)) {
            alert(`Congratulations, you chose ${choice}`);
        }
    }
    return choice;
}
shifumi();