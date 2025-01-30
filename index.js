const userAction = async () => {
    const response = await fetch('https://a25714b3o5.execute-api.us-east-1.amazonaws.com/default');
    const data = await response.json();
    console.log(data);
  };
  
  userAction();
  