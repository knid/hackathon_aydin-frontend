export default function OnBoarding({ tasks, activeJob }) {
    return (
        <>
        <ol

      className="relative space-y-8 pb-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200"
    >
            {tasks && tasks.map && tasks.map((task, id) => 
                <li className="relative -ms-1.5 flex items-start gap-4 transition-all" key={task.ID}>
                    <span className="size-3 shrink-0 rounded-full bg-blue-600  transition-all"></span>
            
                    <div className="-mt-2 transition-all">
                        <time className="text-xs/none font-medium text-gray-700 transition-all">{task.est_time / 60} Dakika</time>
            
                        <h3 className="text-lg font-bold text-gray-900 transition-all">{task.name}</h3>
            
                        <p className="mt-0.5 text-sm text-gray-700 transition-all">
                            {task.description}
                        </p>
                    </div>
                </li>
            )}
    </ol>
            {activeJob ? 
                <div className="mx-auto w-full max-w-sm p-4">
                  <div className="flex animate-pulse -ml-6 mt-4">
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 rounded bg-gray-200"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                        </div>
                        <div className="h-2 rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div></div>

            }
    </>

    )
}
