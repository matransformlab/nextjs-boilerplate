import Image from 'next/image'

interface ProductCardProps {
  title: string
  description: string
  price: string
  features: string[]
  gumroadLink: string
  isLightBox: boolean
}

export default function ProductCard({ 
  title, 
  description, 
  price, 
  features, 
  gumroadLink,
  isLightBox 
}: ProductCardProps) {
  const boxClass = isLightBox ? 'box-light' : 'box-dark'
  
  return (
    <div className={`${boxClass} rounded-2xl p-6 transform hover:scale-105 transition`}>
      <h3 className="text-xl font-bold mb-3 text-gold-primary">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-purple-royal mr-2">✓</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-3xl font-bold text-gold-primary mb-4">{price}</div>
      <a 
        className="gumroad-button"
        href={gumroadLink}
        data-gumroad-overlay-checkout="true">
        ADD TO CART - {price}
      </a>
    </div>
  )
}
