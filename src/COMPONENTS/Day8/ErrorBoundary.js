import React,{Component} from "react";
class ErrorBoundary extends Component{
    state={
        hasError:false
    }

    static getDerivedStateFromError(error)
    {
        return{
            hasError:true
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info);
     }
   
    render()
    {
        if(this.state.hasError===true)
        {
            return <p>Something went wrong.</p>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
