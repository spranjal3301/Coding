interface Props {
    children?: React.ReactNode;
    className?: string;
}


function Container({children,className='',}: Props) {
    return (
      <div className={`w-full max-w-7xl min-h-screen mx-auto flex justify-center items-center flex-wrap ${className}`}>
        {children}
      </div>
    )
  }
  
  export default Container