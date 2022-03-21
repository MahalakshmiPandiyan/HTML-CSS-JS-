var promise = new Promise(function(resolve, reject) {
    const string1 = "maha";

    if(string1 === "maha") {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.then(function () {
            console.log('Success!!!!!!!!!!!!!!!!!');
        }).
        catch(function () {
            console.log('Error has occurred');
        });
    