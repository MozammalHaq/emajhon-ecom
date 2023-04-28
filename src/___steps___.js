/**
 * 1. Create firebase project.
 * 2. create web app.
 * 3. npm i firebase.
 * 4. save firebase config and export default app
 * 5. build> authentication > get started > enable sign in method
 */


// Share data all component
/**
 * Context API
 * Redux toolkit
 * Database
 */

// crateContext from React
/**
 * 1. Create context provider file (folder: providers, context etc.)
 * 2. create a context and set provider with export
 * 3. set the children props
 * 4. set context value
 * 5. set the provider in main.jsx
 */

// Hosting 
/**
 * for each computer one time
 * ------------------------------
 * Build >hosting> get started> npm install -g firebase-tools (প্রতি কম্পিউটারে একবার করলেই হবে।)
 * next > firebase login (একবার একটা কম্পিউটারের জন্য)
 * 
 * for each project one time
 * -------------------------
 * firebase init
 * - proceed
 * - hosting: firebase (up and down arrow) use space to select
 * - existing project & select project > enter
 * - which project as public directory: dist (vite) [react app: built]
 * - single page application: yes (y)
 * - continuous deployment : No (n)
 * 
 * For every time deploy
 * - npm run build
 * -firebase deploy
 */




//========================================
// আমরা যেখানে যেতে চাই, login এর পর সেখানে যেতে তাহলে login page এ react-router এর useNavigate hook ব্যবহার করতে হবে।
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate()
// এবং form reset এর পরে নিচের অংশ লিখে দিলে সরাসরি home page এ চলে যাবে।
// navigate('/')

//-------------------------------
// কিন্তু ্আমরা যেখানে যেতে চাইছি সেখানে যেতে চাই তাহলে react-router এর useLocation hook ব্যবহার করে নিচের মত করে কাজ করতে হবে।
// private route setting
// import { useLocation } from "react-router-dom";
// const location = useLocation();
// return <Navigate to='/login' state={{ from: location }} replace></Navigate>

// login page setting
// const location = useLocation();
// const from = location.state?.from?.pathname || '/';
// navigate(from, { replace: true })

// এই সময় create user এবং sign in উভয় সময় setLoading(true) করে দিতে হবে।
/*
 // Create User Email and password
    const createUser = (email, password) => {
        // for path replace
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user Email and Password
    const logInUserEmailPassword = (email, password) => {
        // for path replace
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
*/

//==========================
// Sign in data যে কোন স্থান থেকে পেতে হলে AuthProvider.jsx এ নিচের মতো করে কাজ করতে হবে।
/*
// observe user auth state (when state change then catch it)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        // stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    }, [])
*/

// এবং Private Route এ নিচের মত কাজ করতে হবে।
/*
const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Loading ....</p>
    }
*/