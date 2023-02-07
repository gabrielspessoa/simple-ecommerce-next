import { sessionOptions } from 'lib/sessions';
import { withIronSessionApiRoute } from 'iron-session/next';

export default withIronSessionApiRoute(async function logoutRoute(req, res) {
  req.session.destroy();
  res.send({ ok: true });
}, sessionOptions);
