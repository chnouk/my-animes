import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { prefetchQueryByUrl } from '../helper/queryHelper';

interface AppQueryProps {
    children: ReactNode
}

const AppQuery = (props: AppQueryProps) => {

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 60 * 24 * 10,    // 10 days
        },
      },
    })

    // prefetchQueryByUrl(queryClient, 'https://cdn.animenewsnetwork.com/encyclopedia/reports.xml?id=155&nlist=all')

    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default AppQuery