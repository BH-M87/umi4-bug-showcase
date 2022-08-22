import { history } from 'umi'
import yayJpg from '../assets/yay.jpg';

export const consoleHistory = () => {
  console.log('history from umi under pages folder', history);
};

// Bug 1: the history object consoled here is correct but value is undefined in app.ts
consoleHistory();

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <p>
        Current umi environment: <code>{process.env.UMI_ENV}</code>
      </p>
    </div>
  );
}
