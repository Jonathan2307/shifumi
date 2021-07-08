function shifumi() {
    const user_choice = ['rock', 'paper', 'scissors']
    const choice = prompt(`Choose one of the following : ${user_choice.join(', ')}.`)
    if (user_choice.includes(choice)) {
        alert(`Congratulations, you chose ${choice}`)
    } else {
        alert(`you did not choose one of the ${user_choice.length} choices`)
    }
}
shifumi();