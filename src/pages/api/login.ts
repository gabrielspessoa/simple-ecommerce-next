import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/sessions';

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const credentials = { email: req.body.email, password: req.body.password };

  let user = {};

  try {
    const tokens = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Invalid user or password');
      }
      return res.json();
    });

    const profile = await fetch(
      'https://api.escuelajs.co/api/v1/auth/profile',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    ).then((res) => {
      if (!res.ok) {
        throw new Error('Error trying to fetch profile info');
      }
      return res.json();
    });
    user = { tokens, profile };
    req.session.user = user;

    await req.session.save();

    console.log(user);

    res.send({ ok: true });
  } catch (err: any) {
    res.status(401).send(err.message);
  }
}, sessionOptions);
