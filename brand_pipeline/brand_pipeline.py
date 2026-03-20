import pandas as pd
import plotly.express as px

# Load the enriched data
df = pd.read_csv('brand_tweets_enriched.csv')

# Create a sentiment breakdown visualization
fig = px.bar(df, x='visual_sentiment', 
             title='Namma Yatri: Visual Sentiment Analysis',
             color='visual_sentiment',
             color_discrete_map={'Positive': '#FFD100', 'Neutral': '#003399', 'Negative': '#FF4B4B'})

# Update layout for Namma Yatri branding
fig.update_layout(plot_bgcolor='white', font_family="Arial")
fig.show()