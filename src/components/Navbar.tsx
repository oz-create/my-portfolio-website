import BubbleMenu from './BubbleMenu'

export default function Navbar() {
    const items = [
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: -8,
    hoverStyles: { bgColor: '#311565', textColor: '#ffffff' }
  },
  {
    label: 'experience',
    href: '#experience',
    ariaLabel: 'Experience',
    rotation: 8,
    hoverStyles: { bgColor: '#311565', textColor: '#ffffff' }
  },
  {
    label: 'education',
    href: '#education',
    ariaLabel: 'Education',
    rotation: 8,
    hoverStyles: { bgColor: '#311565', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#311565', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#311565', textColor: '#ffffff' }
  }
];
  return (
    <div>
      <BubbleMenu
        logo={<img src="/OS-LOGO.png" alt="Logo" className="w-30 h-30 object-contain" />}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </div>
  )
}
    
    
    
    
