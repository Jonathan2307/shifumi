function shifumi() {

    const user_choice = ['rock', 'paper', 'scissors']
    let choice = prompt('Choose one of the following :' + user_choice[0] + ', ' + user_choice[1] + ', ' + user_choice[2])

    if (user_choice.indexOf(choice) < 0) {
        alert(`you did not choose one of the ${user_choice.length} choices`)
    } else {
        alert(`Congratulations, you chose ${choice}`)
    }
}

shifumi();