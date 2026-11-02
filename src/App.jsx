import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Orders from './pages/Orders';
import ShopTemp from './pages/ShopTemp';
import WareHouse from './pages/WareHouse';
import Product_Catalog from './pages/Product_Catalog';
import SignPage from './pages/SignPage';
function App() {

  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/Orders' element={<Orders/>} />
        <Route path="/WareHouse" element={<WareHouse/>}/>
        <Route path='/Prodect_Catalog' element={<Product_Catalog />}/>
        <Route path='/ShopTemp' element={<ShopTemp/>}/>
        <Route path='/SignPage' element={<SignPage/>}/>
      </Routes>

      <header className="App-header">
       
       

       
{/* 

       <section class="mx-auto max-w-6xl px-4 pb-24 pt-6" data-tsd-source="/src/routes/index.tsx:98:7">
       <div class="mb-6 flex flex-wrap gap-2" data-tsd-source="/src/routes/index.tsx:101:13">
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-primary text-primary-foreground" data-tsd-source="/src/routes/index.tsx:103:17">הכל</button>
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-accent" data-tsd-source="/src/routes/index.tsx:103:17">חלב וביצים</button>
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-accent" data-tsd-source="/src/routes/index.tsx:103:17">מאפים</button>
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-accent" data-tsd-source="/src/routes/index.tsx:103:17">ירקות ופירות</button>
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-accent" data-tsd-source="/src/routes/index.tsx:103:17">מזווה</button>
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-accent" data-tsd-source="/src/routes/index.tsx:103:17">שתייה</button>
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-accent" data-tsd-source="/src/routes/index.tsx:103:17">סלטים</button>
       <button class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-accent" data-tsd-source="/src/routes/index.tsx:103:17">ניקיון ובית</button>
       </div>
       <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-tsd-source="/src/routes/index.tsx:114:13">
       <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
       <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
       <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🥛</span>
       <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 480</span>
       </div>
       <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">חלב 3% 1ל'</h3><p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">חלב וביצים</p>
       <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
       <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪6.50 / יח'</span>
       <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
       <path d="M5 12h14"></path><path d="M12 5v14">
       </path>
       </svg> הוסף
       </button>
       </div>
       </div>
       <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
       <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
       <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🍞</span>
       <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 220</span>
       </div>
       <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">לחם אחיד</h3>
       <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">מאפים</p>
       <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
       <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪7.90 / יח'</span>
       <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
       <path d="M5 12h14">
        </path>
        <path d="M12 5v14">
          </path>
          </svg> הוסף</button>
          </div>
          </div>
          <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
          <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
          <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🥚</span>
          <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 160</span>
          </div>
          <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">ביצים L (12)</h3>
          <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">חלב וביצים</p>
          <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
          <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪14.90 / מארז</span>
          <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
          <path d="M5 12h14">
            </path>
            <path d="M12 5v14">
              </path>
              </svg> הוסף</button>
              </div>
              </div>
              <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
              <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
              <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🧀</span>
              <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 140</span>
              </div>
              <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">גבינה צהובה 200ג'</h3>
              <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">חלב וביצים</p>
              <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
              <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪18.50 / יח'</span>
              <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23"
              ><path d="M5 12h14">
                </path>
                <path d="M12 5v14">
                  </path>
                  </svg> הוסף</button>
                  </div>
                  </div>
                  <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                  <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                  <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🍅</span>
                  <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 300</span>
                  </div>
                  <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">עגבניות ק"ג</h3>
                  <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">ירקות ופירות</p>
                  <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                  <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪5.90 / ק"ג</span>
                  <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                  <path d="M5 12h14">
                    </path>
                    <path d="M12 5v14">
                      </path>
                      </svg> הוסף</button>
                      </div>
                      </div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🥒</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 260</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">מלפפונים ק"ג</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">ירקות ופירות</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪4.90 / ק"ג</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                      </svg> הוסף</button>
                      </div>
                      </div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🍌</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 180</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">בננות ק"ג</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">ירקות ופירות</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪7.50 / ק"ג</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                      </svg> הוסף</button>
                      </div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🍚</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 350</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">אורז פרסי 1ק"ג</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">מזווה</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪9.90 / יח'</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23"><path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                      </svg> הוסף</button>
                      </div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🍝</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 400</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">פסטה 500ג'</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">מזווה</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪5.50 / יח'</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                      </svg> הוסף</button>
                      </div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🫒</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-warning text-warning-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 90</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">שמן זית 750מ"ל</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">מזווה</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪34.90 / יח'</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path></svg> הוסף</button>
                      </div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">💧</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 210</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">מים מינרליים 6×1.5ל'</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">שתייה</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪12.90 / מארז</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path></svg> הוסף</button>
                      </div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🥤</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 320</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">קולה 1.5ל'</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">שתייה</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪8.90 / יח'</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                      </svg> הוסף</button>
                      </div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">☕</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 130</span></div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">קפה טורקי 200ג'</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">מזווה</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪16.90 / יח'</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path></svg> הוסף</button></div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🥣</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 110</span>
                      </div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">חומוס 400ג'</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">סלטים</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪11.90 / יח'</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path></svg> הוסף</button>
                      </div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🧻</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-warning text-warning-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 75</span></div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">נייר טואלט 16 גלילים</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">ניקיון ובית</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪29.90 / מארז</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path></svg> הוסף</button></div></div>
                      <div class="flex flex-col rounded-2xl border bg-card p-4 transition-shadow hover:shadow-lg" data-tsd-source="/src/routes/index.tsx:116:17">
                      <div class="flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:117:19">
                      <span class="text-4xl" data-tsd-source="/src/routes/index.tsx:118:21">🧴</span>
                      <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground" data-tsd-source="/src/routes/index.tsx:119:21">מלאי: 190</span></div>
                      <h3 class="mt-3 font-semibold" data-tsd-source="/src/routes/index.tsx:123:19">סבון כלים 750מ"ל</h3>
                      <p class="text-xs text-muted-foreground" data-tsd-source="/src/routes/index.tsx:124:19">ניקיון ובית</p>
                      <div class="mt-3 flex items-center justify-between" data-tsd-source="/src/routes/index.tsx:125:19">
                      <span class="font-bold" data-tsd-source="/src/routes/index.tsx:126:21">₪9.50 / יח'</span>
                      <button class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" data-tsd-source="/src/routes/index.tsx:127:21">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-4 w-4" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:131:23">
                      <path d="M5 12h14"></path><path d="M12 5v14"></path></svg> הוסף</button>
                      </div></div></div>
                      </section> */}
      </header>
    </div>
    
  );
}

export default App;
