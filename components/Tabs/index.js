// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response);
        response.data.topics.forEach(element => {
            const navi = document.createElement('div');
            navi.classList.add('tab');
            navi.textContent = `${element}`;
            console.log(navi);
            document.querySelector('.topics').appendChild(navi);
        })
    })
    .catch(error => {
        console.log('the data was not retured', error)
    });