echo "Clearing existing data..."
rm -rf ./public/extractor/csv
echo "Creating new CSV directory..."
mkdir ./public/extractor/csv
cd public/extractor
echo "Starting data extraction..."
node processAll.js 62386
echo "Adding updated CSV to commit..."
git add *

NOW=$(date +"%m-%d-%Y")
echo "Updating CSV on $NOW"
git commit -m "Pushing updated CSV data on $NOW"
git push

echo "Pushed."

echo "Deploying to GH Pages..."
cd ../../
npm run deploy -- -m "Deploying with updated CSV data on $NOW"

echo "ALL DONE!"



