import AboutView from "@/views/AboutView.vue";
import { defineUseCaseLoader } from "@/util/DefineUseCase";
import { useUseCaseViewManager } from "@/util/UseCaseViewManager"

const CaseName = 'MyView';

function MyCaseSetup() {

    const CaseData = {
        MainTitle:"This Is About View",
        Title: "Internal Design",
    }
    const CaseHandlers = {
        "SendButton-onClick"() {
            console.log("Generic")
        },

        "ExitButton-onClick"() {
            console.log("Closing")
            close();
        },
    };


    // UseCase Views
    const views = [
        { name: 'SC1', component: AboutView,props: { configData: CaseData }, handlers: CaseHandlers },
    ];
    // UseCase View Manager
    const { activateView, close, render } = useUseCaseViewManager(views, onInitialized, onError);

    function onInitialized() {

        console.log("header");
        activateView('SC1');
    }

    // On UseCase (Initialize / Dispose) Error
    function onError(error, source) { console.log(error, `${source} - Error`); }


    // On UseCase (Initialize / Dispose) Error
    return render;
}
// Define UseCase HOC - Loader

const UseCaseLoader = defineUseCaseLoader(CaseName, MyCaseSetup);
export { UseCaseLoader };

