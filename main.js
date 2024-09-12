const buttons = [
    { id: 'one', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg' },
    { id: 'two', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg' },
    { id: 'three', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg' },
    { id: 'four', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg' },
    { id: 'five', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg' },
    { id: 'six', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg' },
    { id: 'seven', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg' },
    { id: 'eight', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg' },
    { id: 'nine', src: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg' }
];

const tvShow = document.getElementById('screen');

buttons.forEach(button => {
    const element = document.getElementById(button.id);
    element.addEventListener('click', function() {
        console.log(tvShow);
        tvShow.src = button.src;
    });
});
