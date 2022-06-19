const mainDocument = document.querySelector('body')
mainDocument.style.background = 'rgb(63, 68, 67)'

let homeSection = document.createElement('section')

// innerHTML
// outherHTML
// textContent

homeSection.innerHTML = `<div>New <span class="color">DOM</span> webpage</div>`
console.log(homeSection)

// insert a new element

// --before object--
// mainDocument.before(home)

// --after object--
// mainDocument.after(home)

// --at the begin in object--
// mainDocument.prepend(home)

// --at the end in object--
// mainDocument.append(home)

mainDocument.prepend(homeSection)

const firstDiv = homeSection.querySelector('div')
const secondDiv = document.createElement('div')

const unorderList1 = document.createElement('ul')
const unorderList1li = document.createElement('li')
const unorderList1liClone = unorderList1li.cloneNode(true)


homeSection.append(unorderList1)
unorderList1.prepend(unorderList1li)
unorderList1.append(unorderList1liClone)

homeSection.append(secondDiv)

unorderList1li.innerHTML = '<span>JUST DO IT !</span>'
unorderList1liClone.innerHTML = '<span>NEVER GIVE UP !</span>'
// textContent

secondDiv.insertAdjacentHTML(
    'afterbegin',
    `<h1>Lets <span class="color">GO </span>!</h1>`
)

// --insertAdjacentHTML--
// beforebegin
// afterbegin
// beforeend
// afterend

secondDiv.append(unorderList1)


console.log(firstDiv.nextElementSibling)

console.log(secondDiv.previousElementSibling)

secondDiv.className = 'center'
unorderList1.className = 'ul-list'

firstDiv.classList.add('main__header')

unorderList1li.style.color = 'rgb(32, 214, 153)'
unorderList1liClone.style.color = 'rgb(32, 214, 153)'

const crossLine = document.createElement('div')
crossLine.classList.add('cross-line')
homeSection.append(crossLine)
crossLine.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    background: rgb(32, 214, 153);
    color: black;
`
crossLine.insertAdjacentHTML(
    'afterbegin',
    `<a>Create your own legend</a>`
)

const byTagName = document.querySelector('[data-say-hi]')
// console.log(byTagName.dataset.sayHi)

const allLi = unorderList1.querySelectorAll('li')
console.log(allLi)

for (const ili of allLi) {
    if (ili.innerText === 'JUST DO IT !') {
        console.log(ili)
    }
}

// ----------------------------------------------------------------- 7 HABITS SECTION -----------------------------------------------------------------
const cardSection = document.querySelector('.cards__section')
const cardBox = document.querySelector('.card__box')
// createCards
const cards = []
for (i = 0; i < 7; i++){
    cards[i] = document.createElement('div')
    cards[i].setAttribute('id', `item-${i + 1}`)
    cards[i].className = 'card'
}
const card1 = cards[0]
const card2 = cards[1]
const card3 = cards[2]
const card4 = cards[3]
const card5 = cards[4]
const card6 = cards[5]
const card7 = cards[6]

card1.innerHTML = `<img class="card__img" src="/cards/1.jpg" alt="">
                    <h3 class="card__name">Habit 1: <span>Be Proactive</span></h3>
                    <p class="card__description">Focus and act on what you can control and influence instead of what you can’t.</p>
                    <a class="card__more">More</a>`

card2.innerHTML = `<img class="card__img" src="/cards/2.jpg" alt="">
                    <h3 class="card__name">Habit 2: <span>Begin With the End in Mind</span></h3>
                    <p class="card__description">Define clear measures of success and a plan to achieve them.</p>
                    <a class="card__more">More</a>`
                    
card3.innerHTML = `<img class="card__img" src="/cards/3.jpg" alt="">
                    <h3 class="card__name">Habit 3: <span>Put First Things First</span></h3>
                    <p class="card__description">Prioritize and achieve your most important goals instead of constantly reacting to urgencies.</p>
                    <a class="card__more">More</a>`

card4.innerHTML = `<img class="card__img" src="/cards/4.jpg" alt="">
                    <h3 class="card__name">Habit 4:  <span>Think Win-Win</span></h3>
                    <p class="card__description">Collaborate more effectively by building high-trust relationships.</p>
                    <a class="card__more">More</a>`

card5.innerHTML = `<img class="card__img" src="/cards/5.jpg" alt="">
                    <h3 class="card__name">Habit 5:  <span>Seek First to Understand, Then...</span></h3>
                    <p class="card__description">Influence others by developing a deep understanding of their needs and perspectives.</p>
                    <a class="card__more">More</a>`

card6.innerHTML = `<img class="card__img" src="/cards/6.jpg" alt="">
                    <h3 class="card__name">Habit 6:  <span>Synergize</span></h3>
                    <p class="card__description">Develop innovative solutions that leverage differences and satisfy all key stakeholders.</p>
                    <a class="card__more">More</a>`

card7.innerHTML = `<img class="card__img" src="/cards/7.jpg" alt="">
                    <h3 class="card__name">Habit 7:  <span>Sharpen the Saw</span></h3>
                    <p class="card__description">Increase motivation, energy, and work/life balance by making time for renewing activities.</p>
                    <a class="card__more">More</a>`
                    
                    
cardBox.append(card1)
cardBox.append(card2)
cardBox.append(card3)
cardBox.append(card4)
cardBox.append(card5)
cardBox.append(card6)
cardBox.append(card7)

// when I click on the card, I had it index and the object !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
cardBox.addEventListener('click', e => {
    const targetCard = e.target.closest('div')

    if (!targetCard) return
    
    const targetIndex = cards.findIndex(card => card === targetCard)
    // const targetCardIndex = cards[targetIndex]

    showCard(targetIndex)

})

function setEenableDisableScroll() {
    document.body.style.overflow = 'hidden'
}

function showCard(number) {
    if (number < 0) {
        return undefined
    }
    const showCard = document.createElement('div')
    showCard.className = 'show__card'
    cardSection.append(showCard)
    const showCardBtn = document.createElement('button')
    showCardBtn.className = 'closeBtn'
    showCard.append(showCardBtn)
    const closeButton = document.querySelector('.closeBtn')
    closeButton.addEventListener('click', removeDiv)
    showCard.addEventListener('click', removeDiv)
    setEenableDisableScroll()


    function removeDiv() {
        showCard.remove()
        document.body.style.overflow = 'scroll'
    }

    if (number === 0) {
        showCard.insertAdjacentHTML(
            'beforeend',
             `<div class="center__content">
                            <div><h1 class="content__header">The Habit of Personal Responsibility</h1>
                            <img class="content__img" src="/cards/1.jpg" alt=""></div>
                            <p class="content__text">Habit 1:<br> Be Proactive is about taking responsibility for your life. Proactive people recognize that they are “response-able.” 
                            They don’t blame circumstances, conditions, or conditioning for their behavior. They know they can choose their behavior. 
                            Reactive people, on the other hand, are often affected by their physical environment. They find external sources to blame for their behavior. 
                            If the weather is good, they feel good. If it isn’t, it affects their attitude and performance, and they blame the weather.
                            All these external forces act as stimuli that we respond to. Between the stimulus and the response is our greatest power—we have the freedom to 
                            choose our response. One of the most important things we choose is what we say. Our language is a good indicator of how we see ourselves.
                            A proactive person uses proactive language—I can, I will, I prefer, etc. A reactive person uses reactive language—I can’t, I have to, if only. 
                            Reactive people believe they are not responsible for what they say and do—they have no choice. Proactive people focus their efforts on their Circle 
                            of Influence®. They work on the things they can do something about: health, children, or problems at work. Reactive people focus their efforts in the 
                            Circle of Concern™—things over which they have little or no control: the national debt, terrorism, or the weather. Gaining an awareness of the 
                            areas in which we expend our energies is a giant step in becoming proactive.</p>
                            </div>`
        )
        
    } else if (number === 1) {
        showCard.insertAdjacentHTML(
            'beforeend',
             `<div class="center__content">
                            <div><h1 class="content__header">The Habit of Personal Vision</h1>
                            <img class="content__img" src="/cards/2.jpg" alt=""></div>
                            <p class="content__text">Habit 2:<br> Begin With the End in Mind is based on imagination—the ability to envision in your mind 
                            what you cannot at present see with your eyes. It is based on the principle that all things are 
                            created twice. There is a mental (first) creation, and a physical (second) creation. The physical 
                            creation follows the mental, just as a building follows a blueprint.If you don’t make a conscious 
                            effort to visualize who you are and what you want in life, then you empower other people and 
                            circumstances to shape you and your life by default. It’s about connecting again with your uniqueness 
                            and then defining the personal, moral, and ethical guidelines within which you can most happily express 
                            and fulfill yourself. One of the best ways to incorporate Habit 2 into your life is to develop a Personal 
                            Mission Statement. It focuses on what you want to be and do. It is your plan for success. It reaffirms who 
                            you are, puts your goals in focus, and moves your ideas into the real world. Your mission statement makes you 
                            the leader of your own life. You create your destiny and secure the future you envision.</p>
                            </div>`
        )
        
    } else if (number === 2) {
        showCard.insertAdjacentHTML(
            'beforeend',
             `<div class="center__content">
                            <div><h1 class="content__header">The Habit of Personal Management</h1>
                            <img class="content__img" src="/cards/3.jpg" alt=""></div>
                            <p class="content__text">Habit 3:<br> Put First Things First is the exercise of independent will toward becoming principle-centered. Habit 3 is 
                            the practical fulfillment of Habits 1 and 2. Habit 1 says, “You are the creator. You are in charge.” Habit 
                            2 is the first mental creation, based on imagination, the ability to envision what you can become. Habit 3 
                            is the second creation, the physical creation. This habit is where Habits 1 and 2 come together. It happens 
                            day in and day out, moment-by-moment. It deals with many of the questions addressed around time management. 
                            But that’s not all; habit 3 is about life management as well—your purpose, values, roles, and priorities. 
                            What are “first things?” First things are those things you find of most worth. If you put first things first, 
                            you are organizing and managing time and events according to the personal priorities you established in Habit 2.</p>
                            </div>`
        )
        
    } else if (number === 3) {
        showCard.insertAdjacentHTML(
            'beforeend',
             `<div class="center__content">
                            <div><h1 class="content__header">The Habit of Mutual Benefit</h1>
                            <img class="content__img" src="/cards/4.jpg" alt=""></div>
                            <p class="content__text">Habit 4:<br> Think Win-Win isn’t about being nice, nor is it a quick-fix technique. It is a character-based code for human interaction and collaboration.
                            Most of us learn to base our self-worth on comparisons and competition. We think about succeeding in terms of someone else failing—if I win, 
                            you lose; or if you win, I lose. Life becomes a zero-sum game. There is only so much pie to go around, and if you get a big piece, there is 
                            less for me; it’s not fair, and I’m going to make sure you don’t get anymore. We all play the game, but how much fun is it really?
                            Win-win sees life as a cooperative arena, not a competitive one. Win-win is a frame of mind and heart that constantly seeks mutual benefit in 
                            all human interactions. Win-win means agreements or solutions are mutually beneficial and satisfying. We both get to eat the pie, and it tastes 
                            pretty darn good! To go for win-win, you not only have to be empathic, but you also have to be confident. You not only have to be considerate 
                            and sensitive, but you also have to be brave. That balance between courage and consideration is the essence of real maturity and is fundamental to win-win.</p>
                            </div>`
        )
        
    } else if (number === 4) {
        showCard.insertAdjacentHTML(
            'beforeend',
             `<div class="center__content">
                            <div><h1 class="content__header">The Habit of Empathic Communication</h1>
                            <img class="content__img" src="/cards/5.jpg" alt=""></div>
                            <p class="content__text">Habit 5:<br> Communication is the most important skill in life. You spend years learning how to read, write, and speak. But what about listening? 
                            What training have you had that enables you to listen so you really, deeply understand another human being? Probably none, right?
                            If you’re like most people, you probably seek first to be understood; you want to get your point across. In doing so, you may ignore the 
                            other person completely, pretend that you’re listening, selectively hear only certain parts of the conversation or attentively focus on 
                            only the words being said, but miss the meaning entirely. So why does this happen? Because most people listen with the intent to reply, 
                            not to understand. You listen to yourself as you prepare in your mind what you are going to say, the questions you are going to ask, etc. 
                            You filter everything you hear through your life experiences, your frame of reference. You check what you hear against your autobiography 
                            and see how it measures up. Consequently, you decide prematurely what the other person means before they finish communicating. Do any of the 
                            following sound familiar? You might be saying, “Hey, wait a minute. I’m just trying to relate to the person by drawing on my own experiences. 
                            Is that so bad?” In some situations, autobiographical responses may be appropriate, such as when another person specifically asks for help from 
                            your point of view or when there is already a very high level of trust in the relationship.</p>
                            </div>`
        )
        
    } else if (number === 5) {
        showCard.insertAdjacentHTML(
            'beforeend',
             `<div class="center__content">
                            <div><h1 class="content__header">The Habit of Creative Cooperation</h1>
                            <img class="content__img" src="/cards/6.jpg" alt=""></div>
                            <p class="content__text">Habit 6:<br> To put it simply, synergy means “two heads are better than one.” Synergize is the habit of creative cooperation. It is teamwork, open-mindedness, 
                            and the adventure of finding new solutions to old problems. But it doesn’t happen on its own. It’s a process, and through that process, people bring 
                            all their personal experience and expertise to the table. Together, they can produce far better results than they could individually. Synergy lets 
                            us discover jointly things we are much less likely to discover by ourselves. It is the idea that the whole is greater than the sum of the parts. 
                            One plus one equals three, or six, or sixty—you name it. When people begin to interact together genuinely, and they’re open to each other’s influence, 
                            they begin to gain new insight. The capability of inventing new approaches is increased exponentially because of differences.
                            Valuing differences is what really drives synergy. Do you truly value the mental, emotional, and psychological differences among people? Or do you 
                            wish everyone would just agree with you so you could all get along? Many people mistake uniformity for unity and sameness for oneness. One word—boring! 
                            Differences should be seen as strengths, not weaknesses. They add zest to life.</p>
                            </div>`
        )
        
    } else if (number === 6) {
        showCard.insertAdjacentHTML(
            'beforeend',
             `<div class="center__content">
                            <div><h1 class="content__header">The Habit of Daily Self-Renewal</h1>
                            <img class="content__img" src="/cards/7.jpg" alt=""></div>
                            <p class="content__text">Habit 7:<br> Sharpen the Saw means preserving and enhancing the greatest asset you have—you. It means having a balanced program for self-renewal in the 
                            four areas of your life: physical, social/emotional, mental, and spiritual. As you renew yourself in each of the four areas, you create growth 
                            and change in your life. Sharpen the Saw keeps you fresh so you can continue to practice the other six habits. You increase your capacity to 
                            produce and handle the challenges around you. Without this renewal, the body becomes weak, the mind mechanical, the emotions raw, the spirit 
                            insensitive, and the person selfish. Not a pretty picture, is it? You can pamper yourself mentally and spiritually. Or you can go through life 
                            oblivious to your well-being. You can experience vibrant energy. Or you can procrastinate and miss out on the benefits of good health and exercise. 
                            You can revitalize yourself and face a new day in peace and harmony. Or you can wake up in the morning full of apathy because your get-up-and-go 
                            has got-up-and-gone. Every day provides a new opportunity for renewal—a new opportunity to recharge yourself instead of hitting the wall. 
                            All it takes is the desire, knowledge, and skill.</p>
                            </div>`
        )
    }
}