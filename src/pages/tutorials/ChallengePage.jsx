import React from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import DigitalClockPage from '../../stepwise-implementation/DigitalClockPage';
    import URLShortenerPage from '../../stepwise-implementation/URLShortenerPage';
    import MarkdownPreviewerPage from '../../stepwise-implementation/MarkdownPreviewerPage';
    import MovieSearchPage from '../../stepwise-implementation/MovieSearchPage';
    import ResponsiveImageSliderPage from '../../stepwise-implementation/ResponsiveImageSliderPage';
    import RandomJokeGeneratorPage from '../../stepwise-implementation/RandomJokeGeneratorPage';
    import StopwatchPage from '../../stepwise-implementation/StopwatchPage';
    import FormValidationPage from '../../stepwise-implementation/FormValidationPage';
    import QRCodeGeneratorPage from '../../stepwise-implementation/QRCodeGeneratorPage';
    import WeatherDashboardPage from '../../stepwise-implementation/WeatherDashboardPage';
    import PomodoroTimerPage from '../../stepwise-implementation/PomodoroTimerPage';
    import QuizAppPage from '../../stepwise-implementation/QuizAppPage';
    import EcommerceProductFilterPage from '../../stepwise-implementation/EcommerceProductFilterPage';
    import ExpenseTrackerPage from '../../stepwise-implementation/ExpenseTrackerPage';
    import AgeCalculatorPage from '../../stepwise-implementation/AgeCalculatorPage';
    import NotesPage from '../notes/NotesPage';
    import SearchBarPage from '../../stepwise-implementation/SearchBarPage';
    import ImageSliderPage from '../../stepwise-implementation/ImageSliderPage';
    import ResponsiveImageSliderDemo from './ResponsiveImageSliderDemo';
    import TodoListPage from '../../stepwise-implementation/TodoListPage';
    import CurrencyConverterPage from '../../stepwise-implementation/CurrencyConverterPage';
    import SimpleCalculatorPage from '../../stepwise-implementation/SimpleCalculatorPage';
    import WeatherAppPage from '../../stepwise-implementation/WeatherAppPage';
    import RecipeFinderPage from '../../stepwise-implementation/RecipeFinderPage';

    const challenges = {
      'digital-clock': {
        component: DigitalClockPage,
      },
      'url-shortener': {
        component: URLShortenerPage,
      },
      'markdown-previewer': {
        component: MarkdownPreviewerPage,
      },
      'movie-search': {
        component: MovieSearchPage,
      },
      'responsive-image-slider': {
        component: ResponsiveImageSliderPage,
      },
      'random-joke-generator': {
        component: RandomJokeGeneratorPage,
      },
      'stopwatch': {
        component: StopwatchPage,
      },
      'form-validation': {
        component: FormValidationPage,
      },
      'qr-code-generator': {
        component: QRCodeGeneratorPage,
      },
      'weather-dashboard': {
        component: WeatherDashboardPage,
      },
      'pomodoro-timer': {
        component: PomodoroTimerPage,
      },
      'quiz-app': {
        component: QuizAppPage,
      },
      'expense-tracker': {
        component: ExpenseTrackerPage,
      },
      'age-calculator': {
        component: AgeCalculatorPage,
      },
      'search-bar': {
        component: SearchBarPage,
      },
      'image-slider': {
        component: ImageSliderPage,
      },
      'to-do-list-app': {
        component: TodoListPage,
      },
      'currency-converter': {
        component: CurrencyConverterPage,
      },
      'movie-search-app': {
        component: MovieSearchPage,
      },
      'e-commerce-product-filter': {
        component: EcommerceProductFilterPage,
      },
      'simple-calculator': {
        component: SimpleCalculatorPage,
      },
      'weather-app': {
        component: WeatherAppPage,
      },
      'recipe-finder-app': {
        component: RecipeFinderPage,
      },
    };

    const challengeList = Object.keys(challenges);

    function ChallengePage() {
      const { challengeTitle } = useParams();
      const navigate = useNavigate();
      const challenge = challenges[challengeTitle];

      if (!challenge) {
        return <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Challenge Not Found</h1>
          <p className="text-gray-400">Sorry, the challenge you are looking for does not exist.</p>
        </div>;
      }

      const Component = challenge.component;

      const currentIndex = challengeList.indexOf(challengeTitle);
      const nextChallenge = currentIndex < challengeList.length - 1 ? challengeList[currentIndex + 1] : null;

      const handlePrev = () => {
        navigate(-1);
      };

      const handleNext = () => {
        if (nextChallenge) {
          navigate(`/tutorials/development-challenges/${nextChallenge}`);
        }
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
          <div className="container mx-auto py-12 px-4">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!nextChallenge}
                className={`px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all ${!nextChallenge ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next
              </button>
            </div>
            <Component />
          </div>
        </div>
      );
    }

    export default ChallengePage;
