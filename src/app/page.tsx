import os from 'os';
import Counter from '@/components/Counter';

export default function Home() {
    // console.log(' - 서버');
    // console.log(os.hostname());

    return (
        <>
            <h1>WELCOME</h1>
            <Counter />
        </>
    );
}
