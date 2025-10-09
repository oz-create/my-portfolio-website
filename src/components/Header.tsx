import TextType from './TextType'
import SplitText from './SplitText'

export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
         <SplitText
            text="Hello, I'm Özlem Engin Sağır!"
            className="text-5xl font-semibold text-center text-white leading-15"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-500px"
            textAlign="center"
          />
          <TextType 
              text={["<I'm a Frontend Developer./>","<Nice to meet you!/>"]}
              className="text-4xl font-semibold text-center text-white z-1"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
      </div>
  )
}
