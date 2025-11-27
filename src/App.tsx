import toast from "react-hot-toast";
import { Button } from "./components/ui/button";
import { ArrowRight, Star, Users, Shield, Zap } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-indigo-600">
          YourBrand
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <Button variant="default" className="hidden md:block">
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Something
            <span className="text-indigo-600 block">Amazing Today</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your ideas into reality with our cutting-edge platform.
            Join thousands of creators who trust us to bring their visions to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => toast.success("Welcome aboard! 🚀")}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => toast("Demo coming soon!", { icon: "🎬" })}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">100K+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to succeed in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
            <p className="text-gray-600">
              Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
            <p className="text-gray-600">
              Your data is protected with enterprise-grade security and 99.9% uptime guarantee.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
            <p className="text-gray-600">
              Work seamlessly with your team using our powerful collaboration tools and real-time updates.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-900 mb-6">
              "This platform has completely transformed how we work. The results speak for themselves -
              we've increased our productivity by 300% and our team loves using it every day."
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold">Sarah Johnson</p>
              <p>CEO, TechStart Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of satisfied customers and transform your workflow today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => toast.success("Account created! Check your email 📧")}
          >
            Create Your Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-indigo-400 mb-4">YourBrand</div>
              <p className="text-gray-400">
                Building the future, one project at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YourBrand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
