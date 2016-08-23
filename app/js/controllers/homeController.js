function homeController($scope, $state, toastr) {
  console.log('homeCtrl');
  const vm = $scope;

  $scope.myInterval = 150000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [  {
    image: '/css/images/stockApp.png',
    title: 'Personal Stock Watch',
    text: 'Search by TICKER or Name. Create a profile. Add, edit, or remove your personal profile watchlist.',
    features: 'Market On Demand API, User Auth, Social Login (Facebook)',
    id: 0,
    heroku: 'https://tranquil-meadow-87752.herokuapp.com/#/',
    github: 'https://github.com/TobiahRex/StockWatch'
  },{
    image: '/css/images/Yelp_Grid.jpg',
    title: 'Yelp Search Mockup',
    text: 'Search Restuarants by location. Save to Favorites. Edit Favorites.',
    features: 'Yelp API, User Auth, Social Login (Facebook).',
    id: 1,
    heroku: 'https://fathomless-everglades-44961.herokuapp.com/',
    github: 'https://github.com/TobiahRex/YelpAPIWatchlist'
  },{
    image: '/css/images/photoAlbumApp.png',
    title: 'Personal Photo Album Manager',
    text: 'Make an alubm. Upload photos. Assign photos to personalized collections.',
    features: '',
    id: 2,
    heroku: 'https://git.heroku.com/beautiful-everglades-28505.git',
    github: 'https://github.com/TobiahRex/photoAlbum.git'
  }];
  var currIndex = 0;


  // $scope.addSlide = function() {
  //   var newWidth = 600 + slides.length + 1;
  //   console.log('slides: ', slides);
  //   slides.push({
  //     image: 'http://lorempixel.com/' + newWidth + '/300',
  //     text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
  //     id: currIndex++
  //   });
  // };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };
  //
  // for (var i = 0; i < 4; i++) {
  //   $scope.addSlide();
  // }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }

  vm.showSuccessMsg = () => toastr.success('Your information has been saved successfully!');
  vm.showInfoMsg = () => toastr.info("You've got a new email!", 'Information');
  vm.showErrorMsg = () => toastr.error("Your information hasn't been saved!", 'Error');
  vm.showWarningMsg = () => toastr.warning('Your computer is about to explode!', 'Warning');
}

angular.module('fullStackTemplate').controller('homeController', homeController);
