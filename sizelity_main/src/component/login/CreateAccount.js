import { useRef, useState } from "react";

import CreateAccountTest from './CreateAccountTest';
import CreateAccountInsert from './CreateAccountInsert';
import CreateAccountComplete from './CreateAccountComplete';

const CreateAccount = () => {
    const [stage, setStage] = useState(0);
    const testing = useRef(undefined);
    const id = useRef(undefined);
    return (
        <section className="login">
            <div className="logo">
                <h1 className="en">Sizelity</h1>
                <p className="en">for shop</p>
            </div>
            {
                stage === 0 ? (
                    <CreateAccountTest 
                        setStage={setStage}
                        testing={testing} />
                ) : stage === 1 ? (
                    <CreateAccountInsert 
                        setStage={setStage}
                        testing={testing}
                        id={id}/>
                ) : (
                    <CreateAccountComplete 
                        id={id}/>
                )
            }
        </section>
    )
    
}
export default CreateAccount;