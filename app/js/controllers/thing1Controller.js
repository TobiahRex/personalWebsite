function thing1Controller($scope, $state, $log, $uibModal, thingService) {
  console.log('thing1Ctrl');
  const vm = $scope;
  console.log('currentUser: ', vm.currentUser);
  function renderThings() {
    thingService.getThings(vm.currentUser);
    // .then((res) => {
    //   vm.things = res.data;
    // })
    // .catch((err) => {
    //   vm.things = err;
    // });
  }
  function addThing(thing) {
    thingService.addThing(thing);
    // .then((res) => {
    //   vm.things = res.data;
    // })
    // .catch((err) => console.error(err));
  }
  function editThing(thing) {
    thingService.editThing(thing, vm.currentUser._id);
    // .then(() => renderThings())
    // .catch((err) => console.error(err));
  }
  function deleteThing(thing) {
    thingService.removeThing(thing, vm.currentUser._id);
    // .then(() => renderThings())
    // .catch((err) => console.error(err));
  }
  renderThings();
  // ////////////////////////////////////////////////////////////////////
  // Add Thing
  vm.addThing = () => {
    console.log('click');
    const modalInstance = $uibModal.open({
      keyboard: true,
      animation: true,
      templateUrl: '/uib/template/modal/addThing1.html',
      controller: 'addThing1Controller',
      size: 'lg',
    });
    modalInstance.result.then(photo => addThing(photo),
    () => $log.info(`Modal dismissed at:  + ${new Date()}`));
  };

  // //////////////////////////////////////////////////////////////////////
  // Edit Thing
  vm.editThing = thing2Edit => {
    const modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/uib/template/modal/editThing1.html',
      controller: 'editThing1Controller',
      size: 'lg',
      resolve: { editThing: () => thing2Edit },
    });
    modalInstance.result.then((thing) => editThing(thing),
    () => $log.info(`Modal dismissed at:  + ${new Date()}`));
  };

  // //////////////////////////////////////////////////////////////////////
  // Delete Thing
  vm.deleteThing = thing2Delete => {
    const modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/uib/template/modal/deleteThing1.html',
      controller: 'deleteThing1Controller',
      size: 'lg',
      resolve: { thing2Delete: () => thing2Delete },
    });
    modalInstance.result.then((thing) => deleteThing(thing),
    () => $log.info(`Modal dismissed at:  + ${new Date()}`));
  };
}

angular.module('fullStackTemplate').controller('thing1Controller', thing1Controller);
