const nameId = document.getElementById('name-id');
const next = document.getElementById('next');
const inputFile = document.getElementById('input-file');
const textArea = document.getElementById('text-area');
const submit = document.getElementById('submit');
const cardWrapper = document.getElementById('card-wrapper');
const profilePic = document.getElementById('profile-pic');
function validate() {
if (!nameId.value) {
    alert('Please enter!');
    return false;
} 



return false;
}

function clear() {
    nameId.value = '';
    next.value = '';
    inputFile.value = '';
    textArea.value = '';
    submit.value = '';
    cardWrapper.value = '';
}


next && next.addEventListener('click', function() {
   if (validate()) {

    
   }
   clear();
});

submit.addEventListener('click', function() {
if (validate()) {


} 
});



