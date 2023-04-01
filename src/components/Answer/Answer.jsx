import React from 'react';

const Answer = () => {
    return (
        <div>
            <h2>1. Difference between react Props vs state?</h2>
              <p>
                Ans:<br></br>
                Props<br></br> 
                  a. Props are read-only.<br></br>
                  b. Props are immutable.<br></br>
                  c. Props make components reusable.<br></br>
                State:<br></br>
                  a. State changes can be asynchronous.<br></br>
                  b. State is mutable.<br></br>
                  c. State cannot make components reusable.
              </p>
            <h2>2. How does useState work?</h2>
              <p>
                 Ans: It is a react hook.It returns an array with two values: the current state and a function to update it. <br></br>
                 The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
              </p>
            <h2>3. Without data Loading. What else can useEffect do?</h2>
              <p>Ans:<br></br>
                    a. Running on state change: validating input field<br></br>
                    b. Running on state change: live filtering<br></br>
                    c. Running on state change: trigger animation on new array value<br></br>
                    d. Running on props change: update paragraph list on fetched API data update<br></br>
                    e. Running on props change: updating fetched API data to get BTC updated price<br></br>
              </p>
            <h2>4. How does react js work?</h2>
              <p>Ans:   React is most popular javascript libary or framework.it has some common and importent functionality. such as jsx,<br></br>
                 component, hook, dynamik data loadingIn most cases, React is
                 written using JSX instead of <br></br> standard JavaScript to simplify components and keep code clean.
              </p>
              <h1>The End</h1>
        </div>
    );
};

export default Answer;