function App() {
  return (
    <>
      <center>
        <h1>TODO APP</h1>
        <div class="row">
          <div class="col-4">
            <input type="text" placeholder="Enter TODO here" />
          </div>
          <div class="col-4">
            <input type="date" name="" id="" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              ADD
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-4">Buy Milk</div>
          <div class="col-4">4/10/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              DELETE
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-4">Go To College</div>
          <div class="col-4">4/10/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              DELETE
            </button>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
