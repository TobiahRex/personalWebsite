function homeController($scope, $state, toastr) {
  console.log('homeCtrl');
  const vm = $scope;

  $scope.myInterval = 150000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [  {
      image: '/css/images/stockApp.png',
      text: 'Market On Demand - Personal Watchlist App',
      id: 0
    },
    {
      image: '/css/images/yelpApp.png',
      text: 'Yelp Search - Favorites App',
      id: 1
    },
    {
      image: '/css/images/photoAlbumApp.png',
      text: 'Personal Photo Album App',
      id: 2
    }];
  console.log('slides: ', slides);
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
