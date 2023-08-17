"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const formSubmit = (event:FormEvent) => {
    event.preventDefault();
    push(`newpage/${inputVal}`);
  }

  return (
    <div>
      <h4>Enter your name</h4>
      <form onSubmit={formSubmit}>
        <input type='text' placeholder='First Name' onChange={(e) => setInputVal(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}
