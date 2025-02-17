import Header from '../components/header';
import ProductCard from '../components/product_card';

export default function Page1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4 mt-20">
      <Header />
      <h1 className="text-6xl font-extrabold text-pink-300 tracking-wide mt-16">
        Productos
      </h1>

      <ProductCard 
        image="/cakepops.png"
        alt="Pink Cakepops"
        description="Pink cakepops are the perfect blend of elegance and sweetness, making them an irresistible treat for any occasion. These bite-sized delights feature a soft, moist cake center coated in a smooth, pastel pink chocolate shell, creating a delightful contrast of textures. Each cakepop is carefully hand-decorated, often adorned with sprinkles, edible pearls, or delicate drizzles of white chocolate, adding a touch of charm and sophistication."
      />

      <ProductCard 
        image="/cookie.png"
        alt="Pink Cookies"
        description="Pink cookies are a delightful treat that combines a rich, buttery texture with a beautiful rosy hue. These cookies are soft on the inside with a slight crisp on the edges, offering the perfect balance of chewiness and crunch. Infused with sweet vanilla or a hint of strawberry, they have a delicate flavor that pairs wonderfully with their eye-catching pink color. Some are topped with a dusting of powdered sugar, while others feature white chocolate chips, sprinkles, or a glossy glaze for extra sweetness."
        reverse
      />

      <ProductCard 
        image="/cupcake.png"
        alt="Pink Cupcake"
        description="Pink cupcakes are a sweet and charming treat, perfect for any celebration or indulgent moment. These fluffy, moist cupcakes are baked to perfection, infused with delicious flavors like vanilla, strawberry, or raspberry. Their delicate pink hue makes them as beautiful as they are tasty. Topped with a swirl of creamy buttercream frosting—sometimes accented with sprinkles, edible pearls, or a drizzle of white chocolate—each cupcake is a little masterpiece."
      />
    </div>
  );
}