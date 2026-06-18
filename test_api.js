import fetch from 'node-fetch';

async function run() {
  try {
    // 1. Register a user to get a token
    const email = `testuser_${Date.now()}@test.com`;
    console.log('Registering user...', email);
    const regRes = await fetch('http://localhost:5000/api/v1/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: 'Password123!', username: 'Test User' })
    });
    
    if (!regRes.ok) {
      console.log('Register error:', await regRes.text());
      return;
    }
    const regData = await regRes.json();
    const token = regData.token;
    console.log('Got token');

    // 2. Submit test
    const testData = [
      { questionId: 'q1', answer: 5 },
      { questionId: 'q2', answer: 5 },
      { questionId: 'q3', answer: 1 },
      { questionId: 'q11', answer: 5 },
      { questionId: 'q21', answer: 5 }
    ];

    console.log('Submitting test...');
    const subRes = await fetch('http://localhost:5000/api/v1/tests/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        testType: 'short',
        testData,
        timeSpent: 300
      })
    });

    if (!subRes.ok) {
      console.log('Submit error status:', subRes.status);
      console.log('Submit error body:', await subRes.text());
    } else {
      console.log('Submit success!', await subRes.json());
    }
  } catch (err) {
    console.error('Error running script:', err);
  }
}

run();
