const userAction = async () => {
    const response = await fetch('https://a25714b3o5.execute-api.us-east-1.amazonaws.com/default/userCountFunction');
    const data = await response.json();
    window.userCount = data.userCount;
  };
  
  window.userAction = userAction;
  