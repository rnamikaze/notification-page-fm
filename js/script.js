let initial_count = 3; // Set total unread
let unread = true;


let readButton = document.getElementById('read-mark');
let countView = document.getElementById('count');
let unreadIcon = document.getElementsByClassName('unread-icon');
let itemHead = document.getElementsByClassName('item-head');

let notificationItems = document.getElementsByClassName('notification-item');

function addUnreadIcon(value) {
    let unreadIconDiv = null;
    for(let i = 0; i < value; i++) {
        unreadIconDiv = document.createElement('span');
        unreadIconDiv.classList.add('unread-icon');

        itemHead[i].appendChild(unreadIconDiv);
        notificationItems[i].classList.add('unread');
    }
    return unreadIcon.length;
}

function setCount(value, reverse = false) {
    let counter = 0;
    let max = value;

    const interval = setInterval(function() {
        counter++;
        if(reverse) {
            max--;
            countView.innerText = max;
        }else {
            countView.innerText = counter;
        }

        if(counter === value) {
            clearInterval(interval);
        }
    }, 300);
}

let count = addUnreadIcon(initial_count);
setCount(count);

readButton.onclick = function() {
    if(unread) {
        for(let i = 0; i < notificationItems.length; i++) {
            notificationItems[i].classList.remove('unread');
            if(i < count) {
                unreadIcon[0].remove();
            }
        }
        unread = false;
        setCount(count, true);
    }else {
        unread = true;
        addUnreadIcon(count);
        setCount(count);
    }
}