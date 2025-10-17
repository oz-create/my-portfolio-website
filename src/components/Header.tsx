import TextType from './TextType'
import SplitText from './SplitText'

export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 px-10'>
         <SplitText
            text="Hello, I'm Özlem Engin Sağır!"
            className="md:text-5xl text-3xl font-semibold text-center text-white leading-10 mb-2"
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
              className="md:text-4xl text-2xl font-semibold text-center text-white z-1"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
      </div>
  )
}
