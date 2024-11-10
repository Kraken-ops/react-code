
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)


Reconciliation = The react algorithm uses to differntiate one tree with another (Real DOm vs Virtual Dom tree)
to determine which parts are needed to be changed

update = a change in the data used to render a React App. Usually the result of 'setState'
Eventually results in re-render

Usecase(update page compents when it is dependent on network call, variable change)
Fiber = Fiber is to enable React to take advantage of job scheduling.
1) Pause work and come back later
2) assign priority to different works
3) reuse previous work
4) abort work i no longer needed 

useCallback - it is a react hook that lets you cache a function definition between re-renders

useEffect - it is a hook that lets you synchronize a component with external system