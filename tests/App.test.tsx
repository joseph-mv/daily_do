
import { render, screen } from "@testing-library/react";
import { Header } from '../src/components/Header.tsx';
describe("App",()=>{
    it('should render started',()=>{
        render(<Header/>)
        screen.debug()
    })
})

