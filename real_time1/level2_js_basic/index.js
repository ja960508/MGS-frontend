function init() {
  console.log(this);
  function a() {
    console.log(this);
  }

  a();
}

init();
