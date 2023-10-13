import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'
const GTM_CONTAINER_ID = 'GTM-532D849'

const analytics = Analytics({
    app: 'withseismic-web', // Call this whatever you like.
    plugins: [
        googleTagManager({
            containerId: GTM_CONTAINER_ID,
						enabled: true,
        }),
    ]
})

export default analytics;