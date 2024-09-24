function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    } else {
        console.error("Modal with ID '" + modalId + "' does not exist.");
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    } else {
        console.error("Modal with ID '" + modalId + "' does not exist.");
    }
}

function confirmVote(electionType) {
    var checkbox = document.getElementById('agree' + electionType);
    if (checkbox.checked) {
        closeModal('modal' + electionType);
        window.location.href = 'vote' + electionType + '.html';
    } else {
        showNotification('agreementModal');
    }
}

function validateForm() {
    var checkBox = document.getElementById("agreePemilu");
    if (checkBox && !checkBox.checked) {
        showNotification('agreementModal');
    } else if (checkBox) {
        
        console.log("Form validated and submitted.");
    } else {
        console.error("Checkbox for terms agreement not found.");
    }
}

function showNotification(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error("Notification modal with ID '" + modalId + "' does not exist.");
    }
}

function closeNotification(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    } else {
        console.error("Notification modal with ID '" + modalId + "' does not exist.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var voteButtons = document.querySelectorAll('.vote-btn');
    voteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var electionType = this.getAttribute('data-election-type');
            confirmVote(electionType);
        });
    });

    var closeButtons = document.querySelectorAll('.notification-close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var modalId = this.closest('.notification-modal').id;
            closeNotification(modalId);
        });
    });
});

