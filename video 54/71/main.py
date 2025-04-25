import pandas as pd

# Load the dataset
data = pd.read_csv('dataset/data.csv')

# Convert the 'date' column to datetime format
data['date'] = pd.to_datetime(data['date'])

# Create a 'half_year' column based on the date
data['half_year'] = data['date'].apply(lambda x: f"{x.year} H1" if x.month < 7 else f"{x.year} H2")

# Group by 'half_year' and calculate the required fields
grouped = data.groupby('half_year')

# Prepare the output dataframe
output = pd.DataFrame({
    'half_year': grouped.size().index,
    'date_start': grouped['date'].min().values,
    'date_end': grouped['date'].max().values,
    'event_sum': grouped.size().values,
    'event_cumsum': grouped.size().cumsum().values,
})

# Calculate 'event_sum_vs_cumsum'
output['event_sum_vs_cumsum'] = (output['event_sum'] / output['event_cumsum']).round(2)

# Save to submission.csv
output.to_csv('submission.csv', index=False)

print("Submission file created as 'submission.csv'")
